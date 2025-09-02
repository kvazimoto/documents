import "./QuestionsForm.css";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import DynamicStep from "../form_steps/DynamicStep/DynamicStep";
import { stepsConfig } from "../../config/conf";
import ResultBlock from "../../shared/ResultBlock/ResultBlock";
import ContactForm from "../../shared/ContactForm/ContactForm";

export default function QuestionsForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [dynamicOptions, setDynamicOptions] = useState({});
  const [result, setResult] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedWayId, setSelectedWayId] = useState(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      const res = {};
      try {
        const requests = stepsConfig
          .filter((s) => !!s.optionsEndpoint)
          .map(async (s) => {
            const r = await axios.get(s.optionsEndpoint);
            res[s.key] = r.data;
          });
        await Promise.all(requests);
        if (!ignore) setDynamicOptions(res);
      } catch (e) {
        console.error("Ошибка загрузки справочников", e);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const current = stepsConfig[step];
  const value = formData[current.key];

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const payload = {
        country_id: Number(formData.country_id),
        skills: (formData.skills || []).map((v) =>
          typeof v === "object" && v.type === "other" ? v.text : Number(v)
        ),
        urgency: formData.urgency,
      };
      const res = await axios.post("/transfer_ways/recommend/", payload);
      setResult(res.data);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Не удалось получить рекомендации.");
    } finally {
      setSubmitting(false);
    }
  };

  const isEmptyCurrent =
    current.required &&
    (value == null || value === "" || (Array.isArray(value) && value.length === 0));

  const requiredKeys = ["country_id", "skills", "urgency"];
  const isEmptyFinal = requiredKeys.some((k) => {
    const v = formData[k];
    return v == null || v === "" || (Array.isArray(v) && v.length === 0);
  });

  if (submitted) {
    const transformedAnswers = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        const stepConfig = stepsConfig.find((s) => s.key === key);
        const label = stepConfig?.label || key;

        // --- обработка "Другое"
        if (value && typeof value === "object" && value.type === "other") {
          return [key, { label, value: value.text, display: value.text }];
        }
        if (
          Array.isArray(value) &&
          value.some((v) => typeof v === "object" && v.type === "other")
        ) {
          const val = value.map((v) => (typeof v === "object" ? v.text : v));
          return [key, { label, value: val, display: val }];
        }
        // -------------------------

        if (stepConfig?.optionsEndpoint) {
          const options = dynamicOptions[key] || [];
          const val = Array.isArray(value)
            ? value.map(
                (v) => options.find((o) => (o.id ?? o.value) === v)?.id || v
              )
            : options.find((o) => (o.id ?? o.value) === value)?.id || value;
          const display = Array.isArray(value)
            ? value.map(
                (v) => options.find((o) => (o.id ?? o.value) === v)?.name || v
              )
            : options.find((o) => (o.id ?? o.value) === value)?.name || value;
          return [key, { label, value: val, display }];
        }

        if (stepConfig?.options) {
          const val = Array.isArray(value)
            ? value.map((v) => stepConfig.options.find((o) => o.value === v)?.value || v)
            : stepConfig.options.find((o) => o.value === value)?.value || value;
          const display = Array.isArray(value)
            ? value.map((v) => stepConfig.options.find((o) => o.value === v)?.label || v)
            : stepConfig.options.find((o) => o.value === value)?.label || value;
          return [key, { label, value: val, display }];
        }

        return [key, { label, value }];
      })
    );

    return (
      <div className="start-with-form-container-result-contact">
        <div className="start-with-form-container-blub"></div>
        <div className="start-with-form-container-blub2"></div>
        <ResultBlock
          results={result}
          selectedWayId={selectedWayId}
          onSelectWay={setSelectedWayId}
          limit={5}
        />
        <ContactForm answers={transformedAnswers} selectedWayId={selectedWayId} />
      </div>
    );
  }

  // helpers для внешнего input «Другое»
  const isOtherRadioSelected =
    current.allowOther && value && typeof value === "object" && value.type === "other";

  const otherCheckboxItem =
    current.allowOther && Array.isArray(value)
      ? value.find((v) => typeof v === "object" && v.type === "other")
      : null;

  return (
    <div className="start-with-form-container">
      {/* Индикатор прогресса */}

      <div className="start-with-form-container-blub"></div>

      <div className="start-with-form-container-c">
        <div className="start-with-form-container-step">
          <span>
            Шаг {step + 1} / {stepsConfig.length}
          </span>
          <h2>{current.label}</h2>
        </div>

        <div className="start-with-form-container-question">
          <DynamicStep
            step={current}
            value={value}
            onChange={handleChange}
            dynamicOptions={dynamicOptions}
          />
        </div>

        {/* ✅ Тут рендерим input для "Другое", как ты и хотел */}
        {current.type === "radio" && isOtherRadioSelected && (
          <div className="start-with-form-container-other">
            <input
              type="text"
              placeholder="Ваш вариант"
              value={value?.text ?? ""}  
              onChange={(e) =>
                handleChange(current.key, { type: "other", text: e.target.value })
              }
            />
          </div>
        )}

        {current.type === "checkbox" && otherCheckboxItem && (
          <div className="start-with-form-container-other">
            <input
              type="text"
              placeholder="Ваш вариант"
              value={otherCheckboxItem.text || ""}
              onChange={(e) =>
                handleChange(
                  current.key,
                  (value || []).map((v) =>
                    typeof v === "object" && v.type === "other"
                      ? { ...v, text: e.target.value }
                      : v
                  )
                )
              }
            />
          </div>
        )}
      </div>

      <div className="start-with-form-container-buttons">
        {step > 0 && <button onClick={handleBack}>Назад</button>}
        {step <= 0 && <div></div>}
        {step < stepsConfig.length - 1 && (
          <button onClick={handleNext} disabled={isEmptyCurrent}>
            Продолжить
          </button>
        )}
        {step === stepsConfig.length - 1 && (
          <button onClick={handleSubmit} disabled={submitting || isEmptyFinal}>
            {submitting ? "Подбираем варианты..." : "Показать варианты"}
          </button>
        )}
      </div>
    </div>
  );
}

import React from "react";
import "./DynamicStep.css";

export default function DynamicStep({ step, value, onChange, dynamicOptions }) {
  const opts = dynamicOptions?.[step.key] || step.options || [];

  switch (step.type) {
    case "input":
      return (
        <div className="start-with-form-container-question-text-input">
          <input
            placeholder={step.label}
            type={step.inputType || "text"}
            value={value ?? ""}
            onChange={(e) =>
              onChange(
                step.key,
                step.inputType === "number"
                  ? e.target.value === ""
                    ? ""
                    : Number(e.target.value)
                  : e.target.value
              )
            }
          />
        </div>
      );

    case "textarea":
      return (
        <div className="start-with-form-container-question-text-area-input">
          <textarea
            wrap="hard"
            placeholder={step.label}
            value={value ?? ""}
            onChange={(e) => onChange(step.key, e.target.value)}
          />
        </div>
      );

    case "radio":
      return (
        <div className="start-with-form-container-question-grid">
          {opts.map((opt) => {
            const val = opt.id ?? opt.value;
            return (
              <label key={val}>
                <input
                  type="radio"
                  name={step.key}
                  checked={value === val}
                  onChange={() => onChange(step.key, val)}
                />
                {opt.image && (
                  <img
                    src={opt.image}
                    alt={opt.name ?? opt.label}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                  />
                )}
                {opt.name ?? opt.label}
              </label>
            );
          })}

          {step.allowOther && (
            <label key="__other">
              <input
                type="radio"
                name={step.key}
                checked={value && typeof value === "object" && value.type === "other"}
                onChange={() =>
                  onChange(step.key, {
                    type: "other",
                    text:
                      (value && typeof value === "object" && value.type === "other" && value.text) ||
                      "",
                  })
                }
              />
              Другое
            </label>
          )}
        </div>
      );

    case "checkbox":
      return (
        <div className="start-with-form-container-question-grid">
          {opts.map((opt) => {
            const val = opt.id ?? opt.value;
            const checked = Array.isArray(value) ? value.includes(val) : false;
            return (
              <label key={val}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    if (e.target.checked) {
                      // «Другое» — альтернативная опция: очищаем её при выборе обычного
                      const withoutOther = (value || []).filter(
                        (v) => !(typeof v === "object" && v.type === "other")
                      );
                      onChange(step.key, [...withoutOther, val]);
                    } else {
                      onChange(step.key, (value || []).filter((v) => v !== val));
                    }
                  }}
                />
                {opt.image && (
                  <img
                    src={opt.image}
                    alt={opt.name ?? opt.label}
                    style={{ width: 20, height: 20, marginRight: 8 }}
                  />
                )}
                {opt.name ?? opt.label}
              </label>
            );
          })}

          {step.allowOther && (
            <label key="__other">
              <input
                type="checkbox"
                checked={
                  Array.isArray(value) &&
                  value.some((v) => typeof v === "object" && v.type === "other")
                }
                onChange={(e) => {
                  if (e.target.checked) {
                    // «Другое» — альтернативная опция: удаляем все обычные значения
                    const existingText =
                      (Array.isArray(value) &&
                        value.find((v) => typeof v === "object" && v.type === "other")?.text) ||
                      "";
                    onChange(step.key, [{ type: "other", text: existingText }]);
                  } else {
                    onChange(
                      step.key,
                      (value || []).filter((v) => !(typeof v === "object" && v.type === "other"))
                    );
                  }
                }}
              />
              Другое
            </label>
          )}
        </div>
      );

    default:
      return null;
  }
}

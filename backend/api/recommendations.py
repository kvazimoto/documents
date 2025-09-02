from . import models

def recommend_transfer_ways(data):
    country_id = data.get('country_id')
    skills = data.get('skills', [])
    budget = data.get('budget')
    is_legally = data.get('is_legally')

    results = []

    for way in models.TransferWay.objects.all():
        score = 0

        # страна
        if country_id and way.country_id == country_id:
            score += 2

        # навыки
        if skills:
            matched_skills = way.skills.filter(id__in=skills).count()
            score += matched_skills

        # бюджет
        if budget is not None and budget >= way.needed_sum:
            score += 1

        # легальность
        if is_legally is not None and way.is_legally == is_legally:
            score += 1

        results.append({
            "instance": way,
            "score": score
        })

    # сортировка по убыванию
    results.sort(key=lambda x: x['score'], reverse=True)

    return results

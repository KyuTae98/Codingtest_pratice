def find_new_average(scores):
    max_score = max(scores)
    new_scores = []
    for score in scores:
        new_score = score / max_score * 100
        new_scores.append(new_score)
    new_average = sum(new_scores) / len(new_scores)
    return new_average
n = int(input())
scores = list(map(int, input().split()))

new_average = find_new_average(scores)
print(new_average)

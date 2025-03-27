def solution(a, b):
    result1 = int(str(a) + str(b))
    result2 = 2 * a * b
    answer = max(result1, result2)
    return answer
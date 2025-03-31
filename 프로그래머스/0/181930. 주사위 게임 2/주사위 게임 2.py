def solution(a, b, c):
    answer = 0
    # 모두 다름
    if a != b and b != c and c != a:
        answer = a + b + c
    # 모두 같음
    if a == b and b == c:
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
    if (a == b and b != c) or (b == c and c != a) or (c == a and c != b):
        answer = (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
    return answer
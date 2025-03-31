def solution(code):
    answer = ''
    mode = 0
    for idx in range(len(code)):
        if mode == 0:
            if code[idx] == "1":
                mode = 1
            else:
                if idx % 2 == 0:
                    answer += code[idx]
        else: # mode == 1
            if code[idx] == "1":
                mode = 0
            else:
                if idx % 2 == 1:
                    answer += code[idx]
    if not answer:
        return "EMPTY"
    return answer
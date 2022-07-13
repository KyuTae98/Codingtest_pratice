def onetwothree(n):
    if n==2:
        return 2
    elif n==3:
        return 4
    elif n==1:
        return 1
    return onetwothree(n-1)+onetwothree(n-2)+onetwothree(n-3)

n = int(input())

for _ in range(n):
    num = int(input())
    result = onetwothree(num)
    print(result)
    

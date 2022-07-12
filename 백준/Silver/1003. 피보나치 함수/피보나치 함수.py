def fibonachi(n):
    cnt = [1,0]
    for _ in range(n):
        c0 = cnt[0]
        c1 = cnt[1]
        cnt[0] = c1
        cnt[1] = c0+c1
    print(cnt[0],cnt[1])
    

n = int(input())

for _ in range(n):
    num = int(input())
    fibonachi(num)

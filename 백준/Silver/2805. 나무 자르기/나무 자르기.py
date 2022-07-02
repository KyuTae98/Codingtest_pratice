from sys import stdin

n,k = map(int, stdin.readline().split())
nlist = list(map(int, stdin.readline().split()))
nlist.sort(reverse=True)
f,r = 1, max(nlist)

while r >= f:
    mid = (f+r)//2
    result = 0
    for i in nlist:
        if i > mid:
            result += i - mid
    if result >= k:
        f = mid + 1
    elif result < k:
        r = mid - 1

print(r)

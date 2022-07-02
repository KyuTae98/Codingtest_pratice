from sys import stdin

n,k = map(int,stdin.readline().split())
nlist = [int(stdin.readline()) for _ in range(n)]
nlist.sort()
f, r = 1,max(nlist)

while f <= r:
    l=(f+r)//2
    result = 0
    for i in nlist:
        result += i//l
    if result >= k:
        f = l+1
    else:
        r = l-1
print(r)
                            

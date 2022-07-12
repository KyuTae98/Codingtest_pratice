import sys

N,C = map(int,input().split())

nlist = [int(sys.stdin.readline()) for _ in range(N)]
nlist.sort()

f,r = 1, nlist[-1]-nlist[0]

while f<=r:
    m = (f+r)//2
    pre = nlist[0]
    count = 1

    for i in range(1,len(nlist)):
        if nlist[i] >= pre+m:
            count+=1
            pre = nlist[i]
    
    if count >= C:
        f=m+1
        re=m
    else:
        r=m-1

print(r)


        

n = int(input())
nlist = [0]*(n+1)

for i in range(2,n+1):
    nlist[i] = nlist[i-1]+1
    if i%2==0:
        nlist[i] = min(nlist[i],nlist[i//2]+1)
    if i%3==0:
        nlist[i] = min(nlist[i],nlist[i//3]+1)

print(nlist[n])

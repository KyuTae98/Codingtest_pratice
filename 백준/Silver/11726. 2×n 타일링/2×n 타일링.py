n = int(input())

nlist = [1]*(n+1)

for i in range(2,n+1):
    nlist[i] = nlist[i-1]+nlist[i-2]

print(nlist[n]%10007)

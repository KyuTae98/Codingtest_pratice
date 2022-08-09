N = int(input())

nlist = [1 for _ in range(N+1)]

for i in range(2,N+1):
    nlist[i] = nlist[i-1] + (nlist[i-2]*2)

print(nlist[N]%10007)

N = int(input())

nlist = [0]*300
for i in range(N):
    nlist[i]=int(input())

result = [0]*300

result[0] = nlist[0]
result[1] = nlist[0] + nlist[1]
result[2] = max(nlist[0]+nlist[2],nlist[1]+nlist[2])

for i in range(3,N):
    result[i] = max(result[i-3]+nlist[i]+nlist[i-1],result[i-2]+nlist[i])

print(result[N-1])

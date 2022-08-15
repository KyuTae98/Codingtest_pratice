N = int(input())

nlist = list(map(int,input().split()))
result = [0 for i in range(N)]

for i in range(N):
    for j in range(i):
        if nlist[i] > nlist[j] and result[i] < result[j]:
            result[i] = result[j]
    result[i]+=1

print(max(result))

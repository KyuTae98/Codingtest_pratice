n = int(input())

nlist = [list(map(int,input().split())) for _ in range(n)]

result = []

for i in range(n):
    result.append(nlist[i][1])
result.append(0)
for i in range(n-1,-1,-1):
    if nlist[i][0]+i >n:
        result[i]=result[i+1]
    else:
        result[i]=max(result[i+1],nlist[i][1]+result[i+nlist[i][0]])

print(result[0])

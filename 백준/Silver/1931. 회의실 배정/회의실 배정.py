import sys

N= int(input())

nlist = [list(map(int,sys.stdin.readline().split())) for _ in range(N)]


nlist.sort(key=lambda x:(x[1],x[0]))

result = 0

start = 0

for i,j in nlist:
    if i >= start:
        result+=1
        start = j

print(result)


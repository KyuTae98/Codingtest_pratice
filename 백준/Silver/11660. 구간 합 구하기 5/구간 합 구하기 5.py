import sys

N,M=map(int,input().split())

nlist = [[0]*(N+1)]*(N+1)


for i in range(1,N+1):
    nlist[i] = list(map(int,sys.stdin.readline().split()))
    nlist[i].insert(0,0)
    for j in range(2,N+1):
        nlist[i][j] += nlist[i][j-1]

for j in range(1,N+1):
    for i in range(2,N+1):
        nlist[i][j] += nlist[i-1][j]

for _ in range(M):
    test = list(map(int, sys.stdin.readline().split()))
    print(nlist[test[2]][test[3]] - nlist[test[0]-1][test[3]] - nlist[test[2]][test[1]-1] + nlist[test[0]-1][test[1]-1])
  

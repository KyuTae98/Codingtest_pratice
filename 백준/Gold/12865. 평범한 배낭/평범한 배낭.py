import sys

N, K = map(int, input().split())

nlist = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]


snap = [[0]*(K+1) for _ in range(N)]

for i in range(0,N):
    for j in range(1,K+1):#무게
        w = nlist[i][0]
        v = nlist[i][1]

        if j < w:#담을 수 있는 무게보다 짐의 무게가 클 경우
            snap[i][j] = snap[i-1][j]
        else:
            snap[i][j] = max(snap[i-1][j],snap[i-1][j-w]+v)

print(snap[N-1][K])

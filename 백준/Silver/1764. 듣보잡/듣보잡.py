import sys

N,M = map(int,input().split())

nlistN = list(sys.stdin.readline().rstrip() for _ in range(N))
nlistM = list(sys.stdin.readline().rstrip() for _ in range(M))

result=sorted(set(nlistN)&set(nlistM))

print(len(result))

for i in result:
    print(i)

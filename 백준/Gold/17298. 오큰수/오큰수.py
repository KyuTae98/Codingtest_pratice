n=int(input())

nlist=list(map(int,input().split()))

result = [-1]*n
stack = []
stack.append(0)
for i in range(1,n):
    while stack and nlist[stack[-1]] < nlist[i]:
            result[stack.pop(-1)]=nlist[i]
    stack.append(i)    
print(*result)

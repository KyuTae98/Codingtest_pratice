import re

formula = input().split('-')

stack = []
    
for i in formula:
    cnt = 0
    plus = i.split('+')
    for j in plus:
        cnt+=int(j)
    stack.append(cnt)

result = stack[0]
for i in range(1,len(stack)):
    result -=stack[i]

print(result)

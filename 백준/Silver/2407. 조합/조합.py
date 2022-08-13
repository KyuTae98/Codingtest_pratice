n,m = map(int,input().split())

result1 = 1
result2 = 1
result3 = 1

for i in range(2,n+1):
    result1*=i

for i in range(2,m+1):
    result2*=i

for i in range(2,n-m+1):
    result3*=i

print(result1//(result2*result3))

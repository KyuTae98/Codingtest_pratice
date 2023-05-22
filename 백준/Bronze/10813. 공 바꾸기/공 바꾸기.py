n,m = map(int,input().split())
num_list = list(range(1,n+1))
for i in range(m):
    num1,num2 = map(int,input().split())
    num_list[num1-1], num_list[num2-1] = num_list[num2-1], num_list[num1-1]
print(*num_list)

n=int(input())
s=0
t=0
if n<10:
    n*=10
n1=n
while True:
    c=n
    while c>0:
        s+=c%10
        c//=10
    n=(n%10)*10+s%10
    t+=1
    s=0
    if n==n1:
        break
print(t)

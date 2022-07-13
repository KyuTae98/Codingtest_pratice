N,r,c = map(int,input().split())
count = 0

while N>1:
    num = N-1
    if r>=2**num and c>=2**num:#4
        count+= 3*(2**(num*2))
        r -= 2**num
        c -= 2**num
    elif r>=2**num and c<2**num:#3
        count+= 2*(2**(num*2))
        r -= 2**num
    elif r<2**num and c>=2**num:#2
        count+= 1*(2**(num*2))
        c -= 2**num
    N=num
if r==0 and c==0:
    print(count)
elif r==0 and c==1:
    print(count+1)
elif r==1 and c==0:
    print(count+2)
elif r==1 and c==1:
    print(count+3)

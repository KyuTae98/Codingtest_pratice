A,B,C = map(int,input().split())

def squared(A,B):
    if B==1:
        return A%C
    temp = squared(A,B//2)
    if B%2==0:
        return temp*temp%C
    else:
        return temp*temp*A%C

print(squared(A,B))

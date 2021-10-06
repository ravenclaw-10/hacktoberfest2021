'''Program for product and addition of 2 matrix given by user'''


rows=int(input("Enter the no. of rows of matrix 1:"))
columns=int(input("Enter the no. of columns of matrix 1:"))
columns2=int(input("Enter the no. of columns of matrix 2:"))
elem=0
matrix1=[]
matrix2=[]
matrix_prod=[]
matrix_add=[[0,0,0],[0,0,0],[0,0,0]]
print("Enter matrix 1 element row wise:")
for i in range(0,rows):
    row1=[]
    for j in range(0,columns):
        elem=int(input())
        row1.append(elem)
    matrix1.append(row1)    
print("Enter matrix 2 elements row wise:") 
for i in range(0,rows):
    row2=[]
    for j in range(0,columns2):
        elem=int(input())
        row2.append(elem)
    matrix2.append(row2)
if columns==columns2:
    for i in range(0,rows):
        for j in range(0,columns):
            matrix_add[i][j]=matrix1[i][j]+matrix2[i][j]    
    print("Addition of given matrix:")
    for a in matrix_add:
        print(a)            
for i in range(0,rows):
    row3=[]
    for j in range(0,columns2):
        elem=0
        for k in range(0,rows):
            elem+=matrix1[i][k]*matrix2[k][j]
        row3.append(elem)    
    matrix_prod.append(row3)
print("Product of given matrix:")    
for p in matrix_prod:
    print(p)

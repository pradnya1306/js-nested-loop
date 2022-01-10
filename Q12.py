# i=1
# while i<=4:
#     j=1
#     while j<=i:
#         print(j,end="")
#         j=j+1
#     print()
#     i=i+1

# for i in range(7):
#     for j in range(7):
#         if i+j==9 or i+j==3 or i==4 and j==1 or  i==5 and j==2 or i==1 and j==4 or i==2 and j==5:
#             print("*",end="")
#         else:
#             print(" ",end="")
#     print()

# for i in range(7):
#     for j in range(7):
#         if i==2 and i==4:
#             print("*",end="")
#         else:
#             print(" ",end="") 
#     print()
# for i in range(7):
#     for j in range(7):
#         if i==3 and j<7 or i==2 and j<6 or i==1 and j<5 or i==0 and j<4:
#             print("*",end="")
#         else:
#             print(" ",end="")
    # print()
a=input("enter the number")
for  i in range(len(a)):
    len1=len(a)-i-1
    print(a[i]+("0"*len1),end="")
# print("0"*2)
# import json
# import sys

# jsondata = sys.argv(1)
# data = json.loads(jsondata)
# strmatrix = "0,99,2,99,99,6,0,99,99,99,99,99,0,99,3,99,5,99,0,99,99,99,99,4,0"
count = 5 #data.count

# arr = strmatrix.split(',')


# matrix = [[0 for i in range(count)] for j in range(count)]
# p = 0
# for i in range(count) :
#     for j in range(count) :
#         matrix[i][j] = int(arr[p])
#         p += 1

matrix = [
    [0,99,2,99,99],
    [6,0,99,99,99],
    [99,99,0,99,3],
    [99,5,99,0,99],
    [99,99,99,4,0]
]

router = [[0 for i in range(count)] for j in range(count)]

def floyd(m , r , c): 
    for k in range(c): 
        for i in range(c): 
            for j in range(c):
                if m[i][k] + m[k][j] < m[i][j] : 
                    r[i][j] = k
                    m[i][j] = m[i][k] + m[k][j]


floyd(matrix, router , count)

print(router)

#josn.dumps(answet)
import json
import sys


def floyd(m, r, c):
    for k in range(c):
        for i in range(c):
            for j in range(c):
                if m[i][k] + m[k][j] < m[i][j]:
                    r[i][j] = k + 1
                    m[i][j] = m[i][k] + m[k][j]



def main(argv):
   strmatrix = argv['matrix']
   count = int(argv['count'])

   arr = strmatrix.split('.')

   matrix = [[0 for i in range(count)] for j in range(count)]
   p = 0
   for i in range(count):
       for j in range(count):
           matrix[i][j] = int(arr[p])
           p += 1

   router = [[0 for i in range(count)] for j in range(count)]

   floyd(matrix, router, count)

   answer = json.dumps(router)
   print(answer)



if __name__ == '__main__':
    main(json.loads(sys.argv[1]))
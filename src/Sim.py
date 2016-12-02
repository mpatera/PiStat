import time, sys, json, select, mysql.connector

sim_active = True
heating = True
cur_temp = 55
des_temp = 65
status = 0 #not heating
date = time.strftime('%x')
cur_time = time.strftime('%X')
ct = 0


cnx = mysql.connector.connect(user='root', password='pistat',
                              host='192.168.0.7',
                              database='templog')

cursor = cnx.cursor()

purge_log = ("DELETE FROM log") #clears log table from templog db. Safe updates must be disabled on mysql

log_temp = ("INSERT INTO log "
               "(date, cur_time, cur_temp, des_temp, status) "
               "VALUES (%s, %s, %i, %i, %i)")

trim_log = ("DELETE FROM log WHERE Date < UNIX_TIMESTAMP(DATE_SUB(NOW(), INTERVAL 7 DAY))") #trim entries older than 1 week

cursor.execute(purge_log) #start with fresh table

def read_in():

    lines = sys.stdin.readlines()
    return json.loads(lines[0])



while(sim_active):

    date = time.strftime('%x')
    cursor.execute(trim_log) #trim expired logs

    if select.select([sys.stdin, ], [], [], 0.0)[0]:
        des_temp = int(read_in())                   #NEEDS REFINEMENT
        if des_temp == 0:
            sim_active = False
            print('Simulation Ended')

    while(cur_temp<des_temp):
        cur_temp += 1
        print(cur_temp)
        status = 1
        cur_time = time.strftime('%X')
        cursor.execute(log_temp)
        ct += 1
        time.sleep(60)

    while(cur_temp>des_temp):
        cur_temp -= 1
        print(cur_temp)
        status = 0
        ct += 1
        cur_time = time.strftime('%X')
        cursor.execute(log_temp)
        time.sleep(90)

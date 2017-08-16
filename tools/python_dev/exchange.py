#!/usr/bin/env python
import pika
import sys

connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))

channel = connection.channel()

channel.exchange_declare(exchange='topologyEvents',
                         type='fanout')

channel.exchange_declare(exchange='PROGNET_ALARM_QUEUE',
                         type='fanout')

#channel.exchange_declare(exchange='StatisticReport',
#                         type='direct')

#channel.exchange_declare(exchange='Logger',
#                         type='direct')

print("PYTHON: Exchanges created")

#connection.close()

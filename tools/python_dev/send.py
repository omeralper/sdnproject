#!/usr/bin/env python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters(
               'localhost'))
channel = connection.channel()

#channel.queue_declare(queue='hello')

channel.basic_publish(exchange='PROGNET_ALARM_QUEUE',
                      routing_key='',
                      body='Hello World!')
print " [x] Sent 'Hello World!'"

connection.close()

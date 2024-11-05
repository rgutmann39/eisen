import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Tasks')

def lambda_handler(event, context):
    data = json.loads(event['body'])
    item = {
        'taskId': data.get('taskId'),
        'title': data.get('title'),
        'description': data.get('description'),
        'importance': data.get('importance'),
        'urgency': data.get('urgency')
    }

    try:
        table.put_item(Item=item)
        return {
            'statusCode': 201,
            'body': json.dumps({'message': 'Task created successfully'})
        }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Could not create task', 'error': str(e)})
        }

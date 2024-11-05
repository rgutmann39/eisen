import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Tasks')

def lambda_handler(event, context):
    task_id = event['queryStringParameters']['taskId']

    try:
        response = table.get_item(Key={'taskId': task_id})
        item = response.get('Item')
        if item:
            return {
                'statusCode': 200,
                'body': json.dumps(item)
            }
        else:
            return {
                'statusCode': 404,
                'body': json.dumps({'message': 'Task not found'})
            }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Could not retrieve task', 'error': str(e)})
        }

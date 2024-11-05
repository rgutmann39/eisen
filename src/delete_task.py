import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Tasks')

def lambda_handler(event, context):
    task_id = event['queryStringParameters']['taskId']

    try:
        table.delete_item(Key={'taskId': task_id})
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Task deleted successfully'})
        }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Could not delete task', 'error': str(e)})
        }

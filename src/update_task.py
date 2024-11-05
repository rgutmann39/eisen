import json
import boto3
from botocore.exceptions import ClientError

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Tasks')

def lambda_handler(event, context):
    data = json.loads(event['body'])
    task_id = data.get('taskId')

    update_expression = "set title = :title, description = :desc, importance = :imp, urgency = :urg"
    expression_values = {
        ':title': data.get('title'),
        ':desc': data.get('description'),
        ':imp': data.get('importance'),
        ':urg': data.get('urgency')
    }

    try:
        table.update_item(
            Key={'taskId': task_id},
            UpdateExpression=update_expression,
            ExpressionAttributeValues=expression_values
        )
        return {
            'statusCode': 200,
            'body': json.dumps({'message': 'Task updated successfully'})
        }
    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'message': 'Could not update task', 'error': str(e)})
        }

import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class ParliamentCommonsvotes implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Parliament Commonsvotes',
		name: 'N8nDevParliamentCommonsvotes',
		icon: { light: 'file:./parliament-commonsvotes.svg', dark: 'file:./parliament-commonsvotes.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'API that allows querying of Commons Votes data.',
		defaults: { name: 'Parliament Commonsvotes' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevParliamentCommonsvotesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}

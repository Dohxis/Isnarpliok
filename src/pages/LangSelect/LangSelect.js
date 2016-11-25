import React, {Component} from 'react'
import { Card, Icon, Image, Dimmer, Header, Segment, Grid  } from 'semantic-ui-react'

class LangSelect extends Component {

	render(){
		return (
			<div>
				
				<Header as='h3'>Start learning a new language now!</Header>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante.</p>
				
				<Grid centered='true'>
					<Grid.Row height='5'>
						
						<Grid.Column key='1' width='4' stretched='true'>
							<Card>
								<Image width='100%' src='http://nodeframework.com/assets/img/js.png' />
								<Card.Content>
									<Card.Header>
										Javascript
									</Card.Header>
									<Card.Description>
										Javasccript is fucked up language but whatever.
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<Icon name='user' />
									0 people have completed this course!
								</Card.Content>
							</Card>
						</Grid.Column>
						
						<Grid.Column key='2' width='4' stretched='true'>
						<Dimmer.Dimmable as={Segment}>
							<Dimmer active='true'>
								<Header as='h2' icon inverted>
									<Icon name='history' />
									Coming soon!
								</Header>
							</Dimmer>
							<Card>
								<Image width='100%' src='https://www.sitepoint.com/wp-content/themes/sitepoint/assets/images/icon.php.png' />
								<Card.Content>
									<Card.Header>
										PHP
									</Card.Header>
									<Card.Description>
										Another language widely used in web development. Laravel uses it!
									</Card.Description>
								</Card.Content>
								<Card.Content extra>
									<Icon name='user' />
									0 people have completed this course!
								</Card.Content>
							</Card>
							</Dimmer.Dimmable>
						</Grid.Column>
						
						<Grid.Column key='3' width='4' stretched='true'>
							<Dimmer.Dimmable as={Segment}>
								<Dimmer active='true'>
									<Header as='h2' icon inverted>
										<Icon name='history' />
										Coming soon!
									</Header>
								</Dimmer>
								<Card>
									<Image width='100%' src='https://zeth.net/_images/500px-Python-logo-notext.svg.png' />
									<Card.Content>
										<Card.Header>
											Python
										</Card.Header>
										<Card.Description>
											This is the only lang with a logo and it looks weird.
										</Card.Description>
									</Card.Content>
									<Card.Content extra>
										<Icon name='user' />
										0 people have completed this course!
									</Card.Content>
								</Card>
							</Dimmer.Dimmable>
						</Grid.Column>
						
					</Grid.Row>
				</Grid>
				
			</div>
		);
	}

}

export default LangSelect;

import StyledButton from './StyledButton';

function Template({children, ...args}) {
	return <StyledButton {...args}>{children}</StyledButton>;
}

export const Default = Template.bind({});

Default.args = {
	children: 'Button',
};

const story = {
	title: 'Button',
	component: StyledButton,
};

export default story;

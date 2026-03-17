import ButtonIconLarge from '../components/Atoms/Buttons/ButtonIconLarge/ButtonIconLarge';

export default {
    title: 'Atoms/Button',
    component: ButtonIconLarge,
    argTypes: {
        handleBtnClick: { action: 'button-clicked' },
    },
}

const Template = args => <ButtonIconLarge {...args} />

export const Primary = Template.bind({})


Primary.args = {
    label: 'Button',
    type: 'primary',
}
import { Mail, MessageSquareText, Phone, Send, User } from "lucide-react";

export const UserIcon = (props: React.ComponentProps<typeof User>) => (
	<User {...props} color="black" size={24} />
);

export const MailIcon = (props: React.ComponentProps<typeof Mail>) => (
	<Mail {...props} color="black" size={24} />
);

export const PhoneIcon = (props: React.ComponentProps<typeof Phone>) => (
	<Phone {...props} color="black" size={24} />
);

export const MessageIcon = (
	props: React.ComponentProps<typeof MessageSquareText>,
) => <MessageSquareText {...props} color="black" size={24} />;

export const SendIcon = (props: React.ComponentProps<typeof Send>) => (
	<Send {...props} color="black" size={20} />
);

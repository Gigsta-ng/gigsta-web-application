export interface ServiceItem {
	id: string;
	label: string;
}

export interface ServiceGroup {
	groupName: string;
	services: ServiceItem[];
}

export const gigstaServiceGroups: ServiceGroup[] = [
	{
		groupName: "Home & Repairs",
		services: [
			{ id: "plumbing", label: "Plumbing" },
			{ id: "electrical_repairs", label: "Electrical Repairs" },
			{ id: "painting", label: "Painting" },
			{ id: "generator_repair", label: "Generator Repair" },
		],
	},
	{
		groupName: "Food & Hospitality",
		services: [
			{ id: "bartending", label: "Bartending" },
			{ id: "event_setup_decor", label: "Event Setup & Decor" },
			{ id: "cooking_home_events", label: "Cooking (at home or events)" },
		],
	},
	{
		groupName: "Cleaning & Domestic Services",
		services: [
			{ id: "home_help", label: "Home Help" },
			{ id: "house_cleaning", label: "House Cleaning" },
			{ id: "laundry_ironing", label: "Laundry & Ironing" },
			{ id: "gardening_yard_work", label: "Gardening / Yard Work" },
		],
	},
	{
		groupName: "Delivery & Errands",
		services: [
			{ id: "dispatch_rider", label: "Dispatch Rider" },
			{ id: "personal_errand_services", label: "Personal Errand Services" },
		],
	},
];

export const allServiceIds = gigstaServiceGroups.flatMap((group) =>
	group.services.map((service) => service.id),
);

export const experienceOptions = [
	"0 - 1 Year",
	"1 - 3 Years",
	"3 - 5 Years",
	"5+ Years",
] as const;

export const availabilityOptions = [
	"Full-Time",
	"Part-Time",
	"Weekends Only",
	"Flexible",
] as const;

export const uyoLocations = [
	"Oron Road",
	"Ikot Ekpene Road",
	"Abak Road",
	"Nwaniba Road",
	"Ewet Housing Estate",
	"Shelter Afrique",
	"University of Uyo Area",
	"Itam Industrial Layout",
	"Other",
] as const;

export const taskTypes = [
	"Home Cleaning",
	"Gardening",
	"Moving Help",
	"Plumbing",
	"Electrical Work",
	"Tutoring",
	"Other",
] as const;

export const budgetRanges = [
	"₦1,000 – ₦5,000",
	"₦5,001 – ₦10,000",
	"₦10,001 – ₦20,000",
	"₦20,001 – ₦50,000",
	"₦50,000+",
] as const;

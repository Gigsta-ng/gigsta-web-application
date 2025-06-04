"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

import { ProRegistrationForm } from "@/app/custom-components/ProRegistrationForm";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import { ProRegistrationSuccessContent } from "./ProRegistrationSuccessContent";

export const BecomeProModal = () => {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [isSuccessOpen, setIsSuccessOpen] = useState(false);

	const isDesktop = useMediaQuery("(min-width: 768px)");

	const handleFormSuccess = () => {
		setIsFormOpen(false);
		setIsSuccessOpen(true);
	};

	const closeSuccessModal = () => {
		setIsSuccessOpen(false);
	};

	const formTitle = "Got skills? Get paid. Become a Gigsta Pro today.";

	if (isDesktop) {
		return (
			<>
				<Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
					<DialogTrigger asChild>
						<Button variant="outline" onClick={() => setIsFormOpen(true)}>
							Become a Gigsta Pro
						</Button>
					</DialogTrigger>
					{isFormOpen && (
						<DialogContent className="sm:max-w-lg md:max-w-xl lg:max-w-2xl p-0">
							<DialogClose
								className="absolute right-4 top-4 rounded-sm !text-black ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
								onClick={() => setIsFormOpen(false)}
							>
								<X className="h-5 w-5 text-gray-500" />
								<span className="sr-only">Close</span>
							</DialogClose>
							<DialogHeader className="p-6 pb-4">
								<DialogTitle className="text-xl font-bold text-center">
									{formTitle}
								</DialogTitle>
							</DialogHeader>
							<div className="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 pb-6">
								<ProRegistrationForm onFormSubmitSuccess={handleFormSuccess} />
							</div>
						</DialogContent>
					)}
				</Dialog>

				<Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
					{isSuccessOpen && (
						<DialogContent className="sm:max-w-md p-0">
							<DialogClose
								className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 z-10"
								onClick={closeSuccessModal}
							>
								<X className="h-5 w-5" />
								<span className="sr-only">Close</span>
							</DialogClose>
							<ProRegistrationSuccessContent onClose={closeSuccessModal} />
						</DialogContent>
					)}
				</Dialog>
			</>
		);
	}

	return (
		<>
			<Drawer open={isFormOpen} onOpenChange={setIsFormOpen}>
				<DrawerTrigger asChild>
					<Button variant="outline" onClick={() => setIsFormOpen(true)}>
						Become a Gigsta Pro
					</Button>
				</DrawerTrigger>
				{isFormOpen && (
					<DrawerContent>
						<DrawerHeader className="text-left pt-4 pb-2">
							<DrawerTitle className="text-lg font-bold text-center">
								{formTitle}
							</DrawerTitle>
						</DrawerHeader>
						<div className="overflow-y-auto max-h-[calc(100vh-10rem)] p-4 pt-0">
							<ProRegistrationForm onFormSubmitSuccess={handleFormSuccess} />
						</div>
					</DrawerContent>
				)}
			</Drawer>

			<Drawer open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
				{isSuccessOpen && (
					<DrawerContent>
						<div className="p-4">
							<ProRegistrationSuccessContent onClose={closeSuccessModal} />
						</div>
					</DrawerContent>
				)}
			</Drawer>
		</>
	);
};

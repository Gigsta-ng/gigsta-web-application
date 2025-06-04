"use client";

import { X } from "lucide-react";
import React, { useState } from "react";

import { CreateTaskForm } from "@/app/custom-components/CreateTaskForm";
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
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "usehooks-ts";
import { TaskSuccessContent } from "./CreateTaskSuccessModal";

export const PostTaskModal = () => {
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

	const formTitle =
		"What do you need done today? We'll link you with the right person";

	const successModalProps = {
		content: <TaskSuccessContent onClose={closeSuccessModal} />,
		titleComponent: null,
		closeButton: <X className="h-5 w-5" />,
	};

	if (isDesktop) {
		return (
			<>
				<Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
					<DialogTrigger asChild>
						<Button
							variant="default"
							className="bg-accent-yellow hover:bg-yellow-600 text-black font-semibold"
							onClick={() => setIsFormOpen(true)}
						>
							Create Task
						</Button>
					</DialogTrigger>
					{isFormOpen && (
						<DialogContent className="sm:max-w-lg md:max-w-xl lg:max-w-2xl p-0">
							<DialogClose
								className="absolute right-4 top-4 rounded-sm text-black ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
								onClick={() => setIsFormOpen(false)}
							>
								<X className="h-5 w-5" />
								<span className="sr-only">Close</span>
							</DialogClose>
							<DialogHeader className="p-6 pb-4">
								<DialogTitle className="text-xl text-black font-semibold text-center">
									{formTitle}
								</DialogTitle>
							</DialogHeader>
							<div className="overflow-y-auto max-h-[calc(100vh-12rem)] px-6 pb-6">
								<CreateTaskForm onFormSubmitSuccess={handleFormSuccess} />
							</div>
						</DialogContent>
					)}
				</Dialog>

				<Dialog open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
					{isSuccessOpen && (
						<DialogContent className="sm:max-w-md p-0">
							<DialogTitle />
							<DialogClose
								className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10"
								onClick={closeSuccessModal}
							>
								{successModalProps.closeButton}
								<span className="sr-only">Close</span>
							</DialogClose>
							<TaskSuccessContent onClose={closeSuccessModal} />
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
					<Button
						variant="default"
						className="bg-accent-yellow hover:bg-yellow-600 text-black font-semibold"
						onClick={() => setIsFormOpen(true)} // Explicitly open
					>
						Create Task
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
							<CreateTaskForm onFormSubmitSuccess={handleFormSuccess} />
						</div>
					</DrawerContent>
				)}
			</Drawer>

			<Drawer open={isSuccessOpen} onOpenChange={setIsSuccessOpen}>
				{isSuccessOpen && (
					<DrawerContent>
						<div className="p-4">
							<TaskSuccessContent onClose={closeSuccessModal} />
						</div>
						<DrawerFooter>
							<DrawerClose asChild>
								<Button
									variant="outline"
									onClick={closeSuccessModal}
									className="text-black"
								>
									Close
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				)}
			</Drawer>
		</>
	);
};

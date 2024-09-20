import { Rss } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface RssButtonProps {
	href: string;
}
export function RssButton({ href }: RssButtonProps) {
	return (
		<a href={href} aria-label="RSS feed">
			<Button variant="ghost" size="icon">
				<Rss className="h-[1.2rem] w-[1.2rem]" />
				<span className="sr-only">RSS feed</span>
			</Button>
		</a>
	);
}

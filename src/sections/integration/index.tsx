import {integrationList} from "@/data";
import {Badge} from "@/components/ui/badge";
import {Switch} from "@/components/ui/switch";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import Image from "next/image";

const IntegrationSection = () => {
    return (
        <div className="w-full max-w-5xl">
            <div className="mb-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Integrations</h2>
                    <p>Connect and manage your integrated services.</p>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                        <h2 className="text-base font-medium">Restrict members from installing integrations</h2>
                        <p className="text-sm text-muted-foreground">Workspace members can install any new
                            integration.</p>
                    </div>
                    <Switch aria-label="Toggle integration restrictions"/>
                </div>
            </div>
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-lg font-medium">All integrations</h2>
                    <Badge variant="secondary" className="rounded-full">11</Badge>
                </div>
                <div className="rounded-lg border">
                    <div className="border-b p-4 font-medium">Integration</div>
                    <div className="divide-y">
                        {integrationList.map((integration) => (
                            <div key={integration.id} className="flex items-center justify-between p-4">
                                <div className="flex items-start gap-3">
                                    <Image
                                        src={integration.icon}
                                        alt={`${integration.name} icon`}
                                        className="h-8 w-8 rounded"
                                    />
                                    <div className="flex items-start flex-col gap-2">
                                        <div className={'flex gap-2 items-center'}>
                                            <span className="font-medium text-md">{integration.name}</span>
                                            {integration.badges.map((badge) => (
                                                <Badge key={badge} variant="outline" className="font-normal">
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Badge variant="secondary" className="font-normal text-sm">
                                            {integration.suffix}
                                        </Badge>

                                    </div>
                                </div>
                                <div className="flex items-center gap-8">
                                    <span className="text-sm text-muted-foreground">{integration.users}</span>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <MoreHorizontal className="h-4 w-4"/>
                                                <span className="sr-only">Open menu</span>
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem>View details</DropdownMenuItem>
                                            <DropdownMenuItem>Remove integration</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default IntegrationSection;
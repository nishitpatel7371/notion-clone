'use client';

import { Bell, FileText, Link, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import AccountSection from '@/sections/accounts';
import IntegrationSection from '@/sections/integration';
import NotificationSection from '@/sections/notification';
import AuditLogsSection from '@/sections/auditLogs';

const data = {
  nav: [
    { name: 'Accounts', icon: User },
    { name: 'Integrations', icon: Link },
    { name: 'Notification', icon: Bell },
    { name: 'Audit Log', icon: FileText },
  ],
};
export default function Home() {
  const [open, setOpen] = useState(true);
  const [activePage, setActivePage] = useState('Accounts');

  const handlePageChange = (pageName: string) => {
    setActivePage(pageName);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className={'flex items-center justify-center'}>
        <Button size="sm">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-full overflow-hidden p-0 md:max-h-[500px] md:max-w-[800px] lg:max-h-[800px] lg:max-w-[1000px]">
        <DialogTitle className="sr-only">Settings</DialogTitle>
        <DialogDescription className="sr-only">Customize your settings here.</DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar collapsible="none" className="hidden md:flex">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {data.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.name === activePage}
                          onClick={() => handlePageChange(item.name)}
                        >
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <item.icon />
                            <span>{item.name}</span>
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="flex h-full flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{activePage}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
            <div className="flex h-full flex-col gap-4 overflow-y-auto p-4 pt-0">
              {activePage === 'Accounts' && <AccountSection />}
              {activePage === 'Integrations' && <IntegrationSection />}
              {activePage === 'Notification' && <NotificationSection />}
              {activePage === 'Audit Log' && <AuditLogsSection />}
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

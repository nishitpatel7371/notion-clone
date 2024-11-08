import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Upload, User } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChangeEvent, useState } from "react";
import { accountsList } from "@/data";
import Image from "next/image";
import { cn } from "@/lib/utils";

const AccountSection = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="container h-full flex flex-col gap-5 mx-auto">
      <div className="flex justify-between gap-4 items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Accounts</h2>
          <p className={"text-sm"}>
            Manage your account settings and preferences here.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add account
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[450px]">
            <DialogHeader>
              <DialogTitle>Add New Account</DialogTitle>
              <DialogDescription>
                {
                  "Enter the details for the new account here. Click save when you're done."
                }
              </DialogDescription>
            </DialogHeader>
            <form className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="profile-picture" className="text-right">
                  Profile Picture
                </Label>
                <div className="flex items-center gap-4 col-span-3">
                  <div className="w-18 h-16 aspect-square rounded-full overflow-hidden bg-muted flex items-center justify-center">
                    {profilePicture ? (
                      <img
                        src={profilePicture}
                        alt="Profile preview"
                        className="w-full  h-full object-cover"
                      />
                    ) : (
                      <User className="w-8 h-8 text-muted-foreground" />
                    )}
                  </div>
                  <Label htmlFor="picture-upload" className="cursor-pointer">
                    <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md">
                      <Upload className="w-4 h-4" />
                      <span>Upload</span>
                    </div>
                    <Input
                      id="picture-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </Label>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Select>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                Save Account
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <div
          className={cn(
            "overflow-auto",
            `h-[calc(100vh-165px)] md:h-[calc(100vh-620px)] lg:h-[630px]`
          )}
        >
          <Table className="relative">
            <TableHeader className="sticky top-0 z-10">
              <TableRow>
                <TableHead className="w-[120px]">Profile Picture</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
              <div className="bg-[#dad7d7] h-[1px] w-full absolute bottom-0" />
            </TableHeader>
            <TableBody>
              {accountsList.map((account) => (
                <TableRow key={account.id}>
                  <TableCell>
                    <Image
                      src={account.profilePicture}
                      alt={`${account.name}'s profile`}
                      className="rounded-full"
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.email}</TableCell>
                  <TableCell>{account.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default AccountSection;

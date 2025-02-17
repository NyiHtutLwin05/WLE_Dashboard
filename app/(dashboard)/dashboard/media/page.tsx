"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Grid2x2,
  List,
  MoreHorizontal,
  Plus,
  Search,
  Upload,
  Folder,
  Image as ImageIcon,
  Edit,
  Trash2,
  Download,
  Link as LinkIcon,
} from "lucide-react";

const mediaFiles = [
  {
    id: 1,
    name: "hero-image.jpg",
    type: "image",
    size: "1.2 MB",
    dimensions: "1920x1080",
    uploadedAt: "2024-03-20",
    url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
  },
  {
    id: 2,
    name: "profile-pic.jpg",
    type: "image",
    size: "800 KB",
    dimensions: "800x800",
    uploadedAt: "2024-03-19",
    url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
  },
  {
    id: 3,
    name: "blog-header.jpg",
    type: "image",
    size: "2.1 MB",
    dimensions: "2400x1600",
    uploadedAt: "2024-03-18",
    url: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
  },
];

export default function MediaPage() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFolder, setSelectedFolder] = useState("all");

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Media Library</h2>
        <div className="flex items-center space-x-2">
          <Button
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            variant="outline"
            size="icon">
            {view === "grid" ? (
              <List className="h-4 w-4" />
            ) : (
              <Grid2x2 className="h-4 w-4" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Upload className="mr-2 h-4 w-4" /> Upload Files
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Upload Files</DialogTitle>
                <DialogDescription>
                  Drag and drop files here or click to browse
                </DialogDescription>
              </DialogHeader>
              <div className="border-2 border-dashed rounded-lg p-12 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4 text-sm text-gray-600">
                  Drop your files here, or click to select files
                </div>
                <Button className="mt-4">Browse Files</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Folders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setSelectedFolder("all")}>
                  <Folder className="mr-2 h-4 w-4" />
                  All Files
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => setSelectedFolder("images")}>
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Images
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  New Folder
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="col-span-9 space-y-4">
          {/* Filters */}
          <div className="flex items-center space-x-2">
            <Input
              placeholder="Search files..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64"
            />
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="File type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="images">Images</SelectItem>
                <SelectItem value="videos">Videos</SelectItem>
                <SelectItem value="documents">Documents</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="date">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Upload Date</SelectItem>
                <SelectItem value="name">File Name</SelectItem>
                <SelectItem value="size">File Size</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Files Grid/List */}
          {view === "grid" ? (
            <div className="grid grid-cols-4 gap-4">
              {mediaFiles.map((file) => (
                <Card key={file.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <img
                      src={file.url}
                      alt={file.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-2 right-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" /> Download
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <LinkIcon className="mr-2 h-4 w-4" /> Copy Link
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="text-sm font-medium">{file.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {file.dimensions} • {file.size}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4">Name</th>
                    <th className="text-left p-4">Type</th>
                    <th className="text-left p-4">Size</th>
                    <th className="text-left p-4">Dimensions</th>
                    <th className="text-left p-4">Uploaded</th>
                    <th className="text-right p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mediaFiles.map((file) => (
                    <tr key={file.id} className="border-b">
                      <td className="p-4">
                        <div className="flex items-center">
                          <img
                            src={file.url}
                            alt={file.name}
                            className="w-8 h-8 rounded object-cover mr-2"
                          />
                          {file.name}
                        </div>
                      </td>
                      <td className="p-4">{file.type}</td>
                      <td className="p-4">{file.size}</td>
                      <td className="p-4">{file.dimensions}</td>
                      <td className="p-4">{file.uploadedAt}</td>
                      <td className="p-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" /> Download
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <LinkIcon className="mr-2 h-4 w-4" /> Copy Link
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

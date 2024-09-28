---
title: "Understanding the basename Command in Linux"
description: "The basename command in Linux is used to extract the last element of a file path. This is particularly helpful in bash scripts where you only need the..."
slug: "understanding-the-basename-command-in-linux"
date: "2024-09-28"
author: "Waseem Akram"
image: "/images/posts/basename/basename.png"
---

![Basename](/images/posts/basename/basename.png)

The `basename` command in Linux is used to extract the last element of a file path. This is particularly helpful in bash scripts where you only need the filename or directory name from a full path. The `basename` command can be used in various ways to manipulate file paths and extract specific parts of the path. Additionally, it allows you to remove file extensions or suffixes.

In this guide, we'll explore how to use the `basename` command with examples, showcasing its options and capabilities.

## Basic Syntax of basename

The basename command supports the following syntax:

```bash showLineNumbers
$ basename NAME [SUFFIX]

$ basename OPTION... NAME...
```

  - **NAME**: The full file path or string to extract the base name from.

  - **SUFFIX**: An optional string that will be removed from the output.

The command prints the last component of the file path, and if needed, removes the specified suffix.

## Extracting the File Name

To get the last part of a file path, simply pass the file path to `basename`:

```bash showLineNumbers
$ basename /usr/bin/ls

# output
ls
```

In this example, the `basename` command extracts the filename `ls` from the path `/usr/bin/ls`.

## Handling Trailing Slashes

If the file path ends with a trailing slash, `basename` will return an empty string. To handle this, you can use the `-a` option to remove trailing slashes:

```bash showLineNumbers
$ basename -a /usr/bin/

# output
bin
```

The `-a` option removes trailing slashes from the input before processing it.

Without the trailing slash:

```bash showLineNumbers
$ basename -a /usr/bin

# output
bin
```

In both cases, basename returns the last directory in the path.

## Using basename with Multiple Inputs

You can also use `basename` with multiple file paths. The `-a` or `--multiple` option allows you to process multiple file paths in one go:

```bash showLineNumbers
$ basename -a /usr/bin/ls /usr/bin/cat

# output
ls
cat
```

This command prints the base name of each file path provided.

## Removing a Trailing Suffix

If you want to remove a specific suffix from the file name, you can provide it as a second argument:

```bash showLineNumbers
$ basename /bin/systemctl ctl

# output
system
```

Here, `basename` strips the trailing **ctl** from the file name.

## Removing File Extensions
You can also use this feature to strip common file extensions like .conf:

```bash showLineNumbers
$ basename /etc/resolv.conf .conf

# output
resolv
```

Alternatively, you can use the `-s` or `--suffix` option to achieve the same result:

```bash showLineNumbers
$ basename -s .conf /etc/resolv.conf

# output
resolv
```

Stripping Suffixes from Multiple Files
The `-s` option can be used with multiple files to remove the same suffix:

```bash showLineNumbers
$ basename -s .conf /etc/resolv.conf /etc/db.conf

# output
resolv
db
```

## Conclusion

The basename command is a simple yet powerful tool for handling file paths in Linux. It’s especially useful in bash scripting for extracting file names and removing extensions. With the options to process multiple files and strip suffixes, it's a handy command to have in your toolbox.

That’s all for this guide! If you found it useful, make sure to share it with others and subscribe for more Linux, sysadmin, and DevOps content. 

Happy scripting!

Thanks for reading this post, if you like my work you can support by [buying me a coffee](https://www.buymeacoffee.com/hackerwasii). ☕️
Read other posts

***
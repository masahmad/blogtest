USE [blogdb]
GO

/****** Object:  Table [dbo].[blogtbl]    Script Date: 29/05/2017 23:39:52 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[blogtbl](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[heading] [nchar](100) NULL,
	[blogcontent] [nvarchar](max) NULL,
	[tags] [nchar](100) NULL,
	[datecreated] [datetime2](7) NULL,
 CONSTRAINT [PK_blogtbl] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[blogtbl] ADD  CONSTRAINT [DF_blogtbl_datecreated]  DEFAULT (getdate()) FOR [datecreated]
GO


